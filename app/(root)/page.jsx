import {Button} from '@heroui/button'; 

export default function HomePage() {
  return (
 <div>
  <h1 className="text-3xl text-green-500">homepage</h1>
  <Button
      className="bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      radius="full"
    >
      Button
    </Button>
 </div>
  );
}
