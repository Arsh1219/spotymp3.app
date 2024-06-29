export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    if (!url) {
      return Response.json(
        { msg: "track url was not provided" },
        { status: 400 }
      );
    }
    const apiRoute = await fetch(
      `https://api-rxz9mkg.musicdown.co/download-track`,
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      }
    );
    const apiResponse = await apiRoute.json();
    const { file_url } = apiResponse;
    if (!file_url) {
      return Response.json({ msg: "unable to download file" }, { status: 400 });
    }

    return Response.json({ file_url });
  } catch (error) {
    return Response.json({ msg: "unable to fetch data" }, { status: 400 });
  }
}
