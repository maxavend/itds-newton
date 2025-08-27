import { Avatar, CardImage, Tabs, Select, Flex, ActionIcon } from '@it-ds/ui';
import { Link } from 'react-router-dom';
import gestionAltilloImage from '../../assets/gestion-altillo-image.png';
import santaIsabelLogo from '../../assets/santa-isabel-logo.png';
import { MdOutlineNotifications, MdOutlineContentPaste, MdOutlineConstruction, MdOutlineDescription } from 'react-icons/md';

export default function Home(): JSX.Element {
  return (
    // root: full viewport, prevent page scrolling - inner content scrolls instead
    <div className="bg-screen-base box-border flex flex-col gap-6 items-start justify-start pb-6 pt-12 px-0 relative w-full h-screen overflow-hidden">
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
                        <img src={santaIsabelLogo} alt="Santa Isabel" className="max-w-full max-h-full object-contain" />
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
                isRequired={false}
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

      {/* Content area: page-level container — no scroll here; content allows overflow-visible per Figma */}
      <div className="flex-1 min-h-0 flex flex-col gap-4 px-4 w-full">
        {/* Inner visual area: allows children to overflow (Figma: Fill + Clip content OFF) */}
        <div className="flex-1 min-h-0 overflow-visible w-full">
          <div className="w-full flex items-stretch">
            <div className="flex-1 min-h-0">
        {/* Tabs row: horizontal scroll when items overflow (auto-layout filled + clip off in Figma)
          scrollbar hidden for a clean UI (still scrollable by touch/trackpad/mouse wheel). */}
              <div className="flex gap-2 overflow-x-auto flex-nowrap hide-scrollbar">
                <div className="inline-flex w-max">
                  <Tabs
                  tabs={[
                    { id: 'tasks', name: 'Tareas', Icon: MdOutlineContentPaste },
                    { id: 'tools', name: 'Herramientas', Icon: MdOutlineConstruction },
                    { id: 'summary', name: 'Resumen', Icon: MdOutlineDescription },
                  ]}
                  defaultSelectedKey={'tasks'}
                  showIcons
                  variant="box"
                >
                  <div key="tasks" className="p-0" />
                  <div key="tools" className="p-0" />
                  <div key="summary" className="p-0" />
                  </Tabs>
                </div>
              </div>
            </div>
          </div>

          {/* Card / content below tabs */}
          <div className="w-full mt-2">
            <Link to="/gestion-techos" className="w-full block">
              <CardImage title="Gestión de Techos" description={"Encuentra información de mercadería  en altillos."} image={gestionAltilloImage} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
