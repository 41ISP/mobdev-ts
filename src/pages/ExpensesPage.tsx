import ExpenseForm from '../components/ExpenseForm'
import ExpenseItem from '../components/ExpenseItem'
import { formatMoney } from '../utils'

export default function ExpensesPage() {
    const expenses: any[] = []
    const total = expenses.reduce((sum, e) => sum + e.amount, 0)

    return (
        <>
            <header className="hero">
                <p>Всего потрачено</p>
                <strong>{formatMoney(total)}</strong>
            </header>

            <ExpenseForm />

            {expenses.length === 0 ? (
                <p className="empty">Пока пусто. Добавьте первый расход.</p>
            ) : (
                <ul className="list">
                    {expenses.map((e) => (
                        <ExpenseItem key={e.id} />
                    ))}
                </ul>
            )}
        </>
    )
}
