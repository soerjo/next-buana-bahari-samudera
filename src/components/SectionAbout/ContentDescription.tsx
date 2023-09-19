import Image from "next/image";

export interface IData {
    title: string;
    iconsrc: string;
    description: string;
}

const ContentDescription = ({ listdata }: { listdata: IData[] }) => {
    return (
        <div className="m-auto flex flex-col justify-center items-center">
            <div className="grid gap-4 grid-cols-2">
                {listdata.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className="flex justify-center items-center max-w-xl"
                        >
                            <Image
                                className="bg-white rounded-full p-2"
                                alt={`image_${index}`}
                                src={data.iconsrc}
                                height={120}
                                width={120}
                                priority
                            />
                            <div className="flex flex-col justify-center items-start px-8">
                                <h3 className="text-2xl font-bold text-white">{data.title}</h3>
                                <p className="text-white">{data.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContentDescription;