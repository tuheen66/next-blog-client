import { redirect } from "next/navigation";


export default function userDashboard() {
  return redirect("/dashboard/history")
}
