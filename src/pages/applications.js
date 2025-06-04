import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/applications.css";

const dummyApplications = [
	{
		id: 1,
		name: "Ramesha",
		grade: "5",
		status: "Pending",
		date: "2025-05-20",
		parent: "Ramappa",
		phone: "123-456-7890",
	},
	{
		id: 2,
		name: "Suresha",
		grade: "7",
		status: "Approved",
		date: "2025-05-18",
		parent: "Shankarappa",
		phone: "987-654-3210",
	},
	{
		id: 3,
		name: "Putanna",
		grade: "6",
		status: "Rejected",
		date: "2025-05-15",
		parent: "Puttsami",
		phone: "555-123-4567",
	},
	{
		id: 4,
		name: "Lakshmi",
		grade: "8",
		status: "Pending",
		date: "2025-05-14",
		parent: "Raghavendra",
		phone: "222-333-4444",
	},
	{
		id: 5,
		name: "Manjunath",
		grade: "9",
		status: "Approved",
		date: "2025-05-13",
		parent: "Mallappa",
		phone: "333-444-5555",
	},
	{
		id: 6,
		name: "Kavya",
		grade: "10",
		status: "Pending",
		date: "2025-05-12",
		parent: "Krishna",
		phone: "444-555-6666",
	},
	{
		id: 7,
		name: "Harsha",
		grade: "4",
		status: "Rejected",
		date: "2025-05-11",
		parent: "Harish",
		phone: "555-666-7777",
	},
	{
		id: 8,
		name: "Divya",
		grade: "3",
		status: "Approved",
		date: "2025-05-10",
		parent: "Devappa",
		phone: "666-777-8888",
	},
	{
		id: 9,
		name: "Rohit",
		grade: "2",
		status: "Pending",
		date: "2025-05-09",
		parent: "Ramesh",
		phone: "777-888-9999",
	},
	{
		id: 10,
		name: "Sneha",
		grade: "1",
		status: "Approved",
		date: "2025-05-08",
		parent: "Srinivas",
		phone: "888-999-0000",
	},
	{
		id: 11,
		name: "Vikas",
		grade: "5",
		status: "Rejected",
		date: "2025-05-07",
		parent: "Vijay",
		phone: "999-000-1111",
	},
	{
		id: 12,
		name: "Meghana",
		grade: "6",
		status: "Pending",
		date: "2025-05-06",
		parent: "Manohar",
		phone: "000-111-2222",
	},
	{
		id: 13,
		name: "Shilpa",
		grade: "7",
		status: "Approved",
		date: "2025-05-05",
		parent: "Shivappa",
		phone: "111-222-3333",
	},
	{
		id: 14,
		name: "Arjun",
		grade: "8",
		status: "Pending",
		date: "2025-05-04",
		parent: "Anand",
		phone: "222-444-6666",
	},
	{
		id: 15,
		name: "Pooja",
		grade: "9",
		status: "Rejected",
		date: "2025-05-03",
		parent: "Prakash",
		phone: "333-555-7777",
	},
];

const statusColors = {
	Pending: "pending",
	Approved: "approved",
	Rejected: "rejected",
};

const statusOptions = ["All", "Pending", "Approved", "Rejected"];
const gradeOptions = [
	"All",
	...Array.from(new Set(dummyApplications.map((app) => app.grade)))
		.sort((a, b) => Number(a) - Number(b))
];

const Applications = () => {
	const [applications, setApplications] = useState([]);
	const [statusFilter, setStatusFilter] = useState("All");
	const [gradeFilter, setGradeFilter] = useState("All");
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		setApplications(dummyApplications);
	}, []);

	const handleDelete = (id) => {
		setApplications(applications.filter((app) => app.id !== id));
	};

	const handleNewApplication = () => {
		navigate("/applicationForm");
	};

	const filteredApplications = applications.filter((app) => {
		const statusMatch =
			statusFilter === "All" || app.status === statusFilter;
		const gradeMatch = gradeFilter === "All" || app.grade === gradeFilter;
		const nameMatch = app.name.toLowerCase().includes(search.toLowerCase());
		return statusMatch && gradeMatch && nameMatch;
	});

	return (
		<div className="applications-page">
			<div className="applications-header">
				<h2>Student Applications</h2>
				<div className="applications-actions">
					<input
						className="search-box"
						type="text"
						placeholder="Search by name"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<select
						className="grade-dropdown"
						value={gradeFilter}
						onChange={(e) => setGradeFilter(e.target.value)}
					>
						{gradeOptions.map((grade) => (
							<option key={grade} value={grade}>
								{grade === "All" ? "All Classes" : `Class ${grade}`}
							</option>
						))}
					</select>
					<div className="status-filters">
						{statusOptions.map((option) => (
							<button
								key={option}
								className={`filter-btn${
									statusFilter === option ? " active" : ""
								}`}
								onClick={() => setStatusFilter(option)}
							>
								{option}
							</button>
						))}
					</div>
					<button
						className="new-app-btn"
						onClick={handleNewApplication}
						title="New Application"
					>
						<span role="img" aria-label="Add">
							➕
						</span>
					</button>
				</div>
			</div>
			<div className="applications-list">
				{filteredApplications.map((app) => (
					<div className="application-card" key={app.id}>
						<div className="application-header">
							<span className="applicant-name">{app.name}</span>
							<span
								className={`status-badge ${statusColors[app.status]}`}
							>
								{app.status}
							</span>
							<button
								className="delete-btn"
								title="Delete"
								onClick={() => handleDelete(app.id)}
							>
								<span role="img" aria-label="Delete">
									🗑️
								</span>
							</button>
						</div>
						<div className="application-details">
							<div>
								<strong>Grade:</strong> {app.grade}
							</div>
							<div>
								<strong>Date:</strong> {app.date}
							</div>
							<div>
								<strong>Parent:</strong> {app.parent}
							</div>
							<div>
								<strong>Phone:</strong> {app.phone}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Applications;