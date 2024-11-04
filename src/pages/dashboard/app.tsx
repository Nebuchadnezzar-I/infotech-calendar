import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Dashboard() {
    const [date, setDate] = useState<Date>()

    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
                <Input className="rounded-full px-5" placeholder="Search ..." />
                <Button className="rounded-full">Search</Button>
            </div>

            <div className="flex gap-5">
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Card className="min-w-[30%]">
                    <CardHeader>
                        <CardTitle>New record</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Input placeholder="name" />
                        </div>
                        <div className="space-y-1">
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select event type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Type</SelectLabel>
                                        <SelectItem value="birthday">Birthday</SelectItem>
                                        <SelectItem value="nameday">Nameday</SelectItem>
                                        <SelectItem value="holiday">Holiday</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-1">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[280px] justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Create</Button>
                    </CardFooter>
                </Card>

            </div>

        </div>
    )
}
