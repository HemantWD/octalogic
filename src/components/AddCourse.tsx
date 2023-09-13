import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function AddCourse() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Add Course</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Course</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="name" placeholder="Course Name" className="col-span-4" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="description"
              placeholder="Description"
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="instructor"
              placeholder="Instructor"
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-4">
              <select
                id="instrument"
                name="Instrument"
                className=" w-full border rounded p-1"
              >
                <option value="guitar">Instrument</option>
                <option value="guitar">Guitar</option>
                <option value="violin">Violin</option>
                <option value="flute">Flute</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="price" placeholder="Price" className="col-span-4" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost">Cancel</Button>
          <Button type="submit" variant="destructive">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
