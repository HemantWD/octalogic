import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import action from "../assets/Action.png";

const Action = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img src={action} alt="logo" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit Course</DropdownMenuItem>
          <DropdownMenuItem>Close Course</DropdownMenuItem>
          <DropdownMenuItem>Archive Course</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Action;
