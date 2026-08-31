import "./todo-form.style.css";
import { TextInput } from "../TextInput";
import { Save } from "../Save";

export function TodoForm(onSubmit) {
  return (
    <form className="form" action={onSubmit}>
      <TextInput placeholder="Digite o item que deseja adicionar" />
      <Save>Salvar item</Save>
    </form>
  );
}
