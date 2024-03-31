import Link from 'next/link';

export default function Category({ id, listName }) {
    return (
        <div key={id}>
            <Link href={`/list/${id}`}>
                <h4>{listName}</h4>
            </Link>
        </div>
    )
}