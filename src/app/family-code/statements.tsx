import { createClient } from "@/lib/supabase/server";
import FormItem from "@/components/form-item";
import { deleteStatement } from "./actions";

export default async function Statements() {
  const supabase = createClient();
  const { data: statements, error } = await supabase
    .from("family_code")
    .select("*");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className="mb-10 mt-5 space-y-5">
      {statements.map((statement) => (
        <FormItem
          key={statement.id}
          item={{
            id: statement.id,
            title: statement.name,
          }}
          deleteItem={deleteStatement}
        />
      ))}
    </ul>
  );
}
