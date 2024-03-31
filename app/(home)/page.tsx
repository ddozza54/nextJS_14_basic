import Category from '../components/category';

interface BestSellerLists {
    list_name: string;
    display_name: string;
    list_name_encoded: string;
    oldest_published_date: string;
    newest_published_date: string;
    updated: string;
}

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
        {categories.results.map((category: BestSellerLists) =>
            <Category id={category.list_name_encoded}
                listName={category.list_name} />
        )}
    </div>
}

