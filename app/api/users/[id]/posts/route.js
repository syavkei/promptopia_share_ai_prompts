import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    // connect to DB
    await connectToDB();

    // Filter out prompts
    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
