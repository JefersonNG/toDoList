import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import CheckIcon from "../assets/icons/Check-Regular.svg?react";
import SpinIcon from "../assets/icons/spinner.svg?react";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react";
import XIcon from "../assets/icons/X-Regular.svg?react";

import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";

import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/text";
import Skeleton from "../components/skeleton";

export default function PageComponents() {
  return (
    <div className="flex flex-col gap-10 p-10">
      <h1>Ola</h1>

      <div className="flex gap-3">
        <Icon svg={CheckIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={XIcon} />
        <Icon svg={PencilIcon} />

        <Icon className="fill-pink-base" svg={TrashIcon} />
        <Icon className="fill-pink-base" svg={SpinIcon} animate />
      </div>

      <div className="flex items-center">
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
        <Badge loading></Badge>
      </div>

      <div>
        <Button>Salvar</Button>
        <Button icon={PlusIcon}>Salvar</Button>
      </div>

      <div className="flex">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon loading icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} handle />
      </div>

      <div>
        <InputText />
      </div>

      <div>
        <InputCheckbox />
        <InputCheckbox loading />
      </div>

      <div>
        <Card size="md">ola</Card>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6 w-50" />
      </div>
    </div>
  );
}
