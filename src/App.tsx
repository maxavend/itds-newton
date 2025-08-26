
import React from 'react';
import { Avatar, IconButton, CardImage, Headline, Text } from '@it-ds/ui';
import { FiBell, FiClipboard, FiTool, FiBarChart } from 'react-icons/fi';

const App: React.FC = () => {
	return (
		<div className="min-h-screen p-4 figma-screen-soft">
			<div className="max-w-[1239px] mx-auto">
				{/* Header Section */}
				<header className="bg-white rounded-lg overflow-hidden">
								<div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
									<div className="text-[15px] font-bold">10:02</div>
												<div className="flex items-center gap-3">
													<IconButton Icon={FiBell} variant="tonal" />
													<div className="bg-[#cefde7] rounded-full p-0.5">
														<Avatar size="m" name="N" />
													</div>
												</div>
								</div>

								<div className="px-4 py-3">
									<h2 className="text-[24px] font-bold text-neutral-default">Hola, Nombre 👋🏻</h2>
								</div>
				</header>

				{/* Body */}
				<main className="mt-6">
							<div className="flex gap-3 mb-4 flex-wrap">
								<div className="rounded-full border border-gray-300 px-4 py-2 flex items-center gap-2">
									<FiClipboard className="w-4 h-4" />
									<span className="font-bold">Tareas</span>
								</div>
								<div className="rounded-full border border-[#2cdfa6] px-4 py-2 flex items-center gap-2">
									<FiTool className="w-4 h-4" />
									<span className="font-bold text-black">Herramientas</span>
								</div>
								<div className="rounded-full border border-gray-300 px-4 py-2 flex items-center gap-2">
									<FiBarChart className="w-4 h-4" />
									<span className="font-bold">Resumen</span>
								</div>
							</div>

								<CardImage title="Gestión de techos" description="Encuentra información de mercadería en techos." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QZ6GKaebrFS_qBRnvY9qHVDuONgekzk75ssP6MCMF2Z99bpdubl2dZq4Z6yVJhE1o1Y&usqp=CAU">
									<div className="p-4">
										<Headline title="Gestión de techos" />
										<Text size="base" weight="medium">Encuentra información de mercadería en techos.</Text>
									</div>
								</CardImage>
				</main>
			</div>
		</div>
	);
};

export default App;
