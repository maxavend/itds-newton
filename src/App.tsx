
import React from 'react';
import { Avatar, CardImage, Tabs, Select, Flex, ActionIcon } from '@it-ds/ui';
import { BrowserRouter, Link } from 'react-router-dom';
import gestionAltilloImage from './assets/gestion-altillo-image.png';
import santaIsabelLogo from './assets/santa-isabel-logo.png';
import { MdOutlineNotifications, MdOutlineContentPaste, MdOutlineConstruction, MdOutlineDescription } from 'react-icons/md';

const App: React.FC = () => {
	return (
			<BrowserRouter>
				<div className="bg-screen-base box-border flex flex-col gap-6 items-start justify-start pb-6 pt-12 px-0 relative w-full min-h-screen">
			<Flex className="w-full px-4">
				<div className="w-full">
					<Flex className="items-center justify-between w-full">
						<div className="w-[220px]">
							<Select
								options={[
									{
										id: 'J501',
										name: 'J501 - Bilbao',
										leadingItem: (
											<div className="w-6 h-6 flex items-center justify-center">
												<img
													src={santaIsabelLogo}
													alt="Santa Isabel"
													className="max-w-full max-h-full object-contain"
												/>
											</div>
										),
									},
								]}
								value={'J501'}
								onChange={() => {}}
								placeholder="J501 - Bilbao"
								showIcons
								size="m"
								label=""
								isRequired="false"
							/>
						</div>

						<Flex className="items-center gap-3">
							<ActionIcon Icon={MdOutlineNotifications} aria-label="notifications" size="m" />
							<div className="rounded-full p-[1px] bg-[#cefde7]">
								<Avatar name="SA" />
							</div>
						</Flex>
					</Flex>

					<h2 className="font-bold text-2xl mt-4 text-neutral-strongest">Hola, Samus 👋🏽</h2>
				</div>
			</Flex>

			<div className="flex flex-col gap-4 px-4 w-full">
				<div className="w-full flex items-stretch">
					<div className="flex-1">
						<Tabs
							tabs={[
								{ id: 'tasks', name: 'Tareas', Icon: MdOutlineContentPaste },
								{ id: 'tools', name: 'Herramientas', Icon: MdOutlineConstruction },
								{ id: 'summary', name: 'Resumen', Icon: MdOutlineDescription },
							]}
							defaultSelectedKey={'tasks'}
							showIcons
							variant='box'
						>
							<div key="tasks" className="p-0" />
							<div key="tools" className="p-0" />
							<div key="summary" className="p-0" />
						</Tabs>
					</div>
				</div>

												<Link to="/gestion-altillos" className="w-full">
													<CardImage title="Gestión de Altillos" description={"Encuentra información de mercadería  en altillos."} image={gestionAltilloImage} />
												</Link>
			</div>
			</div>

		</BrowserRouter>
	);
};

export default App;
