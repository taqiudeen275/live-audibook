import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import {
     DeleteIcon, MoreVertical, TextIcon,
} from "lucide-react"
import {EyeOpenIcon} from "@radix-ui/react-icons";


interface  ActivityProps {
    title: string
    thumbnail: string
}

export default function Activity({title, thumbnail}: ActivityProps) {
    return <Card className="w-[250px] bg-transparent">
        <CardContent className="flex justify-center"><Image src={thumbnail} alt="" width={180} height={180}/>
        </CardContent>
        <CardHeader className="space-y-3">
            <CardTitle>{title}</CardTitle>
            <CardDescription className="flex justify-between">
                <Button variant="outline">Open</Button>
                <ActivityMenu name={title} />
            </CardDescription>
        </CardHeader>
    </Card>;
}


function ActivityMenu({name}:{name: string}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost"><MoreVertical /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href="#" className="flex">
                            <EyeOpenIcon className="mr-2 h-4 w-4" />
                            <span>Open</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="#" className="flex">
                            <TextIcon className="mr-2 h-4 w-4" />
                            <span>Rename</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="#" className="flex">
                            <DeleteIcon className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
