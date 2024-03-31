import Link from 'next/link';

export const metadata = {
    title: "HOME",
}

export const URL = "https://books-api.nomadcoders.workers.dev/lists";

const getCategories = async () => {
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function Home() {
    const categories = await getCategories();
    return <div>
        <h1>The New York Times Best Seller Explorer</h1>
        {categories.results.map((category) =>
            <div key={category.list_name_encoded}>
                <Link href={`/list/${category.list_name_encoded}`}>
                    <h4>{category.list_name}</h4>
                </Link>
            </div>
        )}
    </div>
}

