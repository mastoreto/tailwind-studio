import Select from "@components/Select";
import { ShapePropieties } from "@utils/constants";

const SideBar = () => {

  const data = [
    'w-0',
    'w-0.5',
    'w-1',
    'w-1.5',
    'w-2',
    'w-2.5',
    'w-3',
    'w-3.5',
    'w-4',
    'w-5',
    'w-6',
    'w-7',
    'w-8',
    'w-9',
    'w-10',
    'w-11',
    'w-12',
    'w-14',
    'w-16',
    'w-20',
    'w-24',
    'w-28',
    'w-32',
    'w-36',
    'w-40',
    'w-44',
    'w-48',
    'w-52',
    'w-56',
    'w-60',
    'w-64',
    'w-72',
    'w-80',
    'w-96',
    'w-auto',
    'w-px',
    'w-1/2',
    'w-1/3',
    'w-2/3',
    'w-1/4',
    'w-2/4',
    'w-3/4',
    'w-1/5',
    'w-2/5',
    'w-3/5',
    'w-4/5',
    'w-1/6',
    'w-2/6',
    'w-3/6',
    'w-4/6',
    'w-5/6',
    'w-1/12',
    'w-2/12',
    'w-3/12',
    'w-4/12',
    'w-5/12',
    'w-6/12',
    'w-7/12',
    'w-8/12',
    'w-9/12',
    'w-10/12',
    'w-11/12',
    'w-full',
    'w-screen'
]
  
  return (
    <aside className="absolute xl:top-[15%] 2xl:top-[10%] left-[2%] xl:h-[30rem] 2xl:h-[50rem] w-52 rounded-xl bg-gray-300">
      <span>Parametros</span>
      <div>
        <ul>
          <li>
            <Select options={data} />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
