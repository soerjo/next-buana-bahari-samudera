import Image from "next/image";

export interface IData {
    title: string;
    iconsrc: string;
    description: string;
}

const ContentDescription = ({ listdata }: { listdata: IData[] }) => {
    return (
        <div className="m-auto flex flex-col justify-center items-center container p-4">
            <div className={"grid gap-4 grid-cols-1 " + (listdata.length % 2 === 0 ? "md:grid-cols-2" : 'md:grid-cols-3')}>
                {listdata.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className="flex justify-center items-center max-w-xl gap-4 md:w-full"
                        >
                            <Image
                                className="bg-[#2b1656] rounded-full p-2 hidden md:flex"
                                alt={`image_${index}`}
                                src={data.iconsrc}
                                height={120}
                                width={120}
                                priority
                            />
                            <div className="flex flex-col justify-beetween items-start pb-8">
                                <div className="flex justify-center items-center gap-2 w-full pb-2">
                                    <Image
                                        className="bg-white rounded-full p-2 flex md:hidden"
                                        alt={`image_${index}`}
                                        src={data.iconsrc}
                                        height={40}
                                        width={40}
                                        priority
                                    />
                                    <h3 className="text-2xl font-bold text-[#2b1656]">{data.title}</h3>
                                </div>
                                <p className="text-[#2b1656] font-medium text-justify">{data.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContentDescription;