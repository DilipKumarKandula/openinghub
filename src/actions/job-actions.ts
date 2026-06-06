"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createJob(formData: FormData) {
  await prisma.job.create({
    data: {
      title: formData.get("title") as string,
      companyName: formData.get("companyName") as string,
      location: formData.get("location") as string,
      experience: formData.get("experience") as string,
      jobType: formData.get("jobType") as string,
      workMode: formData.get("workMode") as string,
      applyUrl: formData.get("applyUrl") as string,
      description: formData.get("description") as string,
    },
  });

  redirect("/jobs");
}

export async function deactivateJob(id: string) {
  await prisma.job.update({
    where: {
      id,
    },
    data: {
      status: "INACTIVE",
    },
  });

  revalidatePath("/admin/jobs");
  revalidatePath("/jobs");
}

export async function activateJob(id: string) {
  await prisma.job.update({
    where: {
      id,
    },
    data: {
      status: "ACTIVE",
    },
  });

  revalidatePath("/admin/jobs");
  revalidatePath("/jobs");
}



export async function updateJob(
  id: string,
  formData: FormData
) {
  await prisma.job.update({
    where: {
      id,
    },
    data: {
      title: formData.get("title") as string,
      companyName: formData.get("companyName") as string,
      location: formData.get("location") as string,
      experience: formData.get("experience") as string,
      jobType: formData.get("jobType") as string,
      workMode: formData.get("workMode") as string,
      applyUrl: formData.get("applyUrl") as string,
      description: formData.get("description") as string,
    },
  });

  revalidatePath("/admin/jobs");
  revalidatePath("/jobs");

  redirect("/admin/jobs");
}