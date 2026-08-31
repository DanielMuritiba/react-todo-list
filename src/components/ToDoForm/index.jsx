import "./todo-form.style.css";
import { TextInput } from "../TextInput";
import { Save } from "../Save";

export function TodoForm({ onSubmit }) {
  return (
    <form className="todo-form" action={onSubmit}>
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
        name="description"
      />
      <Save>Salvar item</Save>
    </form>
  );
}
