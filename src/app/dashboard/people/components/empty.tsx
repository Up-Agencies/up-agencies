import { Button } from "@/components/ui/button";
import { Plus, Users } from "lucide-react";

export function Empty() {
  return (
    <div className="grid gap-2 place-content-center max-w-lg h-full mx-auto">
      <div className="grid place-content-center mx-auto border size-14 rounded-full">
        <Users />
      </div>
      <h3 className="text-center">Adicione a primeira pessoa</h3>
      <p className="text-center text-sm text-muted-foreground">
        Parece que ainda não temos pessoas cadastradas. Quando alguém for adicionado, você verá as
        informações aqui.
      </p>
      <div className="mx-auto mt-4">
        <Button>
          <Plus className="size-4 mr-1" />
          Adicionar pessoa
        </Button>
      </div>
    </div>
  );
}
