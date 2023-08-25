import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to Fetch prompts", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDB();

    const Existingprompt = await Prompt.findById(params.id);
    if (!Existingprompt)
      return new Response("prompt not found", { status: 404 });
    Existingprompt.prompt = prompt;
    Existingprompt.tag = tag;
    await Existingprompt.save();
    return new Response(JSON.stringify(Existingprompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompts", { status: 500 });
  }
};
export const DELETE = async (request,{params}) => {
    try {
        await connectToDB();

        await Prompt.findByIdAndRemove(params.id);
        return new Response('Prompt deleted successfully',{ status: 200 });
    } catch (error) {
        return new Response("Failed to update prompts", { status: 500 })
    }
}
