import Category from '../components/category';
import styles from '../../styles/home.module.css';
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


const getCategories = async () => {
    const URL = "https://books-api.nomadcoders.workers.dev/lists";
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function Home() {
    const categories = await getCategories();
    return <>
        <h1>The New York Times Best Seller Explorer</h1>
        <div className={styles.container}>
            {categories.results.map((category: BestSellerLists) =>
                <Category id={category.list_name_encoded}
                    listName={category.list_name} />
            )}
        </div>
    </>
}

