import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'
import './AppliedJobTable.css'

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector(store => store.job);

    return (
        <div className="applied-jobs-container">
            <div className="table-3d-wrapper">
                <Table className="custom-3d-table">
                    <TableCaption className="caption-3d">A list of your applied jobs</TableCaption>
                    <TableHeader>
                        <TableRow className="header-row-3d">
                            <TableHead className="text-purple-200">Date</TableHead>
                            <TableHead className="text-purple-200">Job Role</TableHead>
                            <TableHead className="text-purple-200">Company</TableHead>
                            <TableHead className="text-right text-purple-200">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            allAppliedJobs.length <= 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center py-10 no-jobs-msg">
                                        No applications found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                allAppliedJobs.map((appliedJob) => (
                                    <TableRow key={appliedJob._id} className="row-3d">
                                        <TableCell className="font-medium text-slate-700">
                                            {appliedJob?.createdAt?.split("T")[0]}
                                        </TableCell>
                                        <TableCell className="job-title-cell font-bold text-purple-900">
                                            {appliedJob.job?.title}
                                        </TableCell>
                                        <TableCell>
                                            <span className="company-tag-purple">{appliedJob.job?.company?.name}</span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Badge className={`status-badge-3d ${
                                                appliedJob?.status === "rejected" ? 'status-rejected' : 
                                                appliedJob.status === 'pending' ? 'status-pending' : 'status-accepted'
                                            }`}>
                                                {appliedJob.status.toUpperCase()}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default AppliedJobTable