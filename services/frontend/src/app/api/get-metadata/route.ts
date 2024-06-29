export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const inputJson = await request.json();
    const { url } = inputJson;

    if (!url) {
      return Response.json({ msg: "No URL was provided..." }, { status: 400 });
    }
    const apiRoute = await fetch(
      `https://api-rxz9mkg.musicdown.co/get-metadata`,
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

    return Response.json({
      apiResponse,
    });
  } catch (error) {
    return Response.json({ msg: "unable to fetch data" }, { status: 400 });
  }
}
