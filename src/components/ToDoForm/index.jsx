import "./todo-form.style.css";
import { TextInput } from "../TextInput";
import { Save } from "../Save";

export function TodoForm({ onSubmit, defaultValue }) {
  return (
    <form className="todo-form" action={onSubmit}>
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
        name="description"
        defaultValue={defaultValue}
      />
      <Save>Salvar item</Save>
    </form>
  );
}
