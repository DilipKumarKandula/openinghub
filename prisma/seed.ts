import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.job.create({
    data: {
      title: "Java Developer",
      companyName: "ABC Technologies",
      location: "Hyderabad",
      experience: "2-5 Years",
      jobType: "Full Time",
      workMode: "Hybrid",
      applyUrl: "https://example.com/apply",
      description:
        "Looking for a Java Developer with Spring Boot experience.",
    },
  });

  console.log("Job created");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });