export type JobListItem = {
  id: string;
  title: string;
  companyName: string;
  location: string;
  experience: string;
  workMode: string;
  jobType: string;
  status: "ACTIVE" | "INACTIVE" | "EXPIRED";
  createdAt: Date;
};