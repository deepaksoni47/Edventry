import dbConnect from "@/lib/dbConnect";
import Event from "@/models/Event";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await dbConnect();
    const now = new Date();
    const result = await Event.deleteMany({ endDate: { $lt: now } });

    return res.status(200).json({
      message: "Expired events deleted",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting expired events:", error);
    return res.status(500).json({ message: "Server Error" });
  }
}
