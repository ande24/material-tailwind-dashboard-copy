type CrumbsProps = {
    path: string;
}

export default function Crumbs (CrumbsProps: CrumbsProps) {
    const crumbs = CrumbsProps.path.split("/").filter(Boolean);
    console.log(crumbs);

    function generatePath (index: number) {
        let path = "";
        for (let i = 0; i <= index; i++) {
            path = path + crumbs[i] + "/";
        }
        return "/" + path;
    }

    function capitalize (str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if (crumbs.length === 0) return; 

    return (
        <div className={`flex-col`}>
            {crumbs.length === 1 ? (
                <>
                    <a className={`text-sm text-gray-600`} href={generatePath(0)}>
                        {capitalize(crumbs[0])} <span className={`ml-2`}>/</span>
                    </a>
                </>
            ) : (
                <>
                    <div>
                        {crumbs.map((page, index) => (
                            <a key={index} href={generatePath(index)} className={`${index === crumbs.length - 1 ? "text-gray-800" : "text-gray-600 opacity-60"} text-sm`}>
                                {capitalize(page)} <span className={`ml-1 mr-2 opacity-100 ${index === crumbs.length - 1 ? "hidden" : ""}`}>/</span>
                            </a>
                        ))}
                    </div>
                    <p className={`font-bold text-base`}>{capitalize(crumbs[crumbs.length - 1])}</p>
                </>
            )}
        </div>
    );
}