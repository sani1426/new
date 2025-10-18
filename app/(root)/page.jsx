import { Accordion } from "radix-ui";

export default function HomePage() {
  return (
 <div>
  <h1 className="text-3xl text-green-500">homepage</h1>
  <Accordion.Root
  type="single"
  defaultValue="item-1"
  collapsible
  >
		<Accordion.Item value="item-1">
			<Accordion.Header>
				<Accordion.Trigger >hello</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quisquam nostrum, unde voluptas eos fugit dolorem doloremque quas, eum iste, numquam ad necessitatibus mollitia libero consequuntur dignissimos minima. Aliquam, porro.
      </Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
 </div>
  );
}
