import { useState } from 'react';

export default function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <form className="form" >
      <input
        aria-label="Название"
        placeholder="Название"
        value={title}
        maxLength={60}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="form__row">
        <input
          aria-label="Сумма"
          placeholder="Сумма, ₽"
          inputMode="decimal"
          value={amount}
          required
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit" className="btn">
        Добавить
      </button>
    </form>
  );
}
