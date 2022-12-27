// @ts-ignore
export async function load({ params }) {
    const post = await import(`../${params.slug}.md`);

    return {
        body: post.html
    }
}