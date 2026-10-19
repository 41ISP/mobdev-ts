import { Link } from 'react-router-dom'

export default function CategoriesPage() {
    const rows = []

    return (
        <>
            <h1 className="title">По категориям</h1>

            {rows.length === 0 ? (
                <p className="empty">
                    Данных пока нет. <Link to="/">Добавить расход</Link>
                </p>
            ) : (
                <ul className="list"></ul>
            )}
        </>
    )
}
