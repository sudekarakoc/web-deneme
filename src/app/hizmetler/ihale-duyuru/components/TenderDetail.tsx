import { Tender } from "../types/tender";

interface Props {
  tender: Tender;
}

export default function TenderDetail({ tender }: Props) {
  return (
    <tr>
      <td colSpan={4} className="p-0 border-b border-gray-100 bg-gray-50/30">
        <div className="px-6 py-6 animate-fade-in">

          <div className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm max-w-4xl">

            <Item label="Birim" value={tender.birim} />
            <Item label="Usül" value={tender.usul} />
            <Item label="Usül Tipi" value={tender.usulTip} />
            <Item
              label="İhale Tarihi"
              value={`${tender.tarih} ${tender.saat}`}
            />
            <Item
              last
              label="İhale Kayıt No"
              value={tender.kayitNo}
            />

          </div>

        </div>
      </td>
    </tr>
  );
}

interface ItemProps {
  label: string;
  value: string;
  last?: boolean;
}

function Item({ label, value, last }: ItemProps) {
  return (
    <div
      className={`flex justify-between items-center px-5 py-3.5 hover:bg-gray-50 transition ${
        !last ? "border-b border-gray-100" : ""
      }`}
    >
      <span className="text-[14.5px] text-gray-500">
        {label}
        <span className="ml-1 font-medium text-gray-700">
          : {value}
        </span>
      </span>
    </div>
  );
}