import {
    ArrowUp, AudioLines, AudioWaveformIcon, BookAudio,
} from "lucide-react"

import { Button } from "@/components/ui/button"
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

export function NewProjectMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full">New Project</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Products</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href="/dashboard/text-to-speech" className="flex">
                            <AudioLines className="mr-2 h-4 w-4" />
                            <span>Text To Speech</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="#" className="flex">
                        <AudioWaveformIcon className="mr-2 h-4 w-4" />
                        <span>Voice Over</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="#" className="flex">
                        <AudioLines className="mr-2 h-4 w-4" />
                        <span>Voice Clone</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="#" className="flex">
                        <BookAudio className="mr-2 h-4 w-4" />
                        <span>Audio Book</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href="#" className="flex">
                        <ArrowUp className="mr-2 h-4 w-4" />
                        <span>Upgrade</span>
                        </Link>
                    </DropdownMenuItem>

                </DropdownMenuGroup>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
