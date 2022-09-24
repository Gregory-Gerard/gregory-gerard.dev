import React from 'react';
import DftIcon from './icons/DftIcon';
import LaBoiteImmoLogo from './icons/LaBoiteImmoIcon';

function Row(props: { logo: React.ReactNode; company: string; roles: Record<string, string> }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-zinc-800 shadow-outline p-3 rounded-full">{props.logo}</div>
      <div className="w-full">
        <strong className="block mb-2 text-zinc-100">{props.company}</strong>

        <div className="flex flex-col gap-2 w-ful text-xs">
          {Object.entries(props.roles).map(([role, time]) => (
            <div className="flex justify-between" key={time}>
              <span className="text-zinc-400">{role}</span>
              <span className="text-zinc-500">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="flex flex-col gap-8">
      <Row
        logo={<LaBoiteImmoLogo className="w-6 h-6" />}
        company="La Boîte Immo"
        roles={{
          'Tech Lead': 'Sept. 2022 — En cours',
          'Développeur web senior': 'Juin 2022 — Sept. 2022',
          'Développeur web': 'Juill. 2021 — Juin 2022',
        }}
      />

      <Row
        logo={<DftIcon className="w-6 h-6" />}
        company="D.F.T"
        roles={{
          'Développeur web': 'Sept. 2020 — Juin 2021',
          'Développeur alternant': 'Sept. 2017 — Août 2020',
        }}
      />
    </div>
  );
}
