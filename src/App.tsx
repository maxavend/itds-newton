
import React from 'react';
import { Avatar, CardImage, Tabs, Select, Flex, IconButton } from '@it-ds/ui';
import { MdContentPaste, MdConstruction, MdDescription, MdNotifications } from 'react-icons/md';

const App: React.FC = () => {
	return (
		<div className="bg-screen-base box-border flex flex-col gap-6 items-start justify-start pb-6 pt-12 px-0 relative w-full min-h-screen">
			<Flex className="w-full px-4">
				<div className="w-full">
					<Flex className="items-center justify-between w-full">
						<div className="w-[220px]">
							<Select
								options={[{ id: 'J501', name: 'J501 - Bilbao' }]}
								value={'J501'}
								onChange={() => {}}
								placeholder="J501 - Bilbao"
								showIcons
								size="m"
							/>
						</div>

						<Flex className="items-center gap-3">
							<IconButton Icon={MdNotifications} aria-label="notifications" size="m" />
							<div className="rounded-full p-[1px] bg-[#cefde7]">
								<Avatar name="SA" />
							</div>
						</Flex>
					</Flex>

					<h2 className="font-bold text-2xl mt-4 text-neutral-strongest">Hola, Samus 👋🏽</h2>
				</div>
			</Flex>

			<div className="flex flex-col gap-4 px-4 w-full">
								<Tabs
									tabs={[
										{ id: 'tasks', name: 'Tareas', Icon: MdContentPaste },
										{ id: 'tools', name: 'Herramientas', Icon: MdConstruction },
										{ id: 'summary', name: 'Resumen', Icon: MdDescription },
									]}
									defaultSelectedKey={'tasks'}
								>
									<div key="tasks" className="p-0" />
									<div key="tools" className="p-0" />
									<div key="summary" className="p-0" />
								</Tabs>

				<CardImage title="Gestión de techos" description={"Encuentra información de mercadería  en techos."} image={undefined}>
					{/* children intentionally empty; CardImage will render title/description */}
				</CardImage>
			</div>
		</div>
	);
};

export default App;
