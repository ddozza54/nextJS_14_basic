"use client"
import styles from '../../../styles/list.module.css'
import { API_URL } from '../../constans';

interface Params {
    params: { id: string }
}

interface BookList {
    rank: number;
    rank_last_week: number;
    weeks_on_list: number;
    asterisk: number;
    dagger: number;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    description: string;
    price: string;
    title: string;
    author: string;
    contributor: string;
    contributor_note: string;
    book_image: string;
    book_image_width: number;
    book_image_height: number;
    amazon_product_url: string;
    age_group: string;
    book_review_link: string;
    first_chapter_link: string;
    sunday_review_link: string;
    article_chapter_link: string;
    book_uri: string;
}

const getListsOfBooks = async (id: string) => {
    const URL = `${API_URL}list?name=${id}`;
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function ListPage({ params: { id } }: Params) {
    const bookLists = await getListsOfBooks(String(id));
    return <div>
        <h1>{bookLists.results.list_name}</h1>
        <div className={styles.container}>
            {bookLists && bookLists.results.books.map((book: BookList) =>
                <div key={book.primary_isbn10} className={styles.book}>
                    <img src={book.book_image} />
                    <h4>{book.title}</h4>
                    <span>{book.author}</span>
                    <a href={book.amazon_product_url} target='_blank'>Buy Now 👉</a>
                </div>
            )
            }
        </div>
    </div >
}