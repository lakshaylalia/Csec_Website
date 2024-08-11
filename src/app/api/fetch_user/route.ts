import axios from "axios";
import { NextResponse } from "next/server";
import { sha512 } from 'js-sha512';

export async function POST(req: Request) {
    try {
        const contestId = await req.json()
        const currentUnixTime = Math.floor(Date.now() / 1000);
        const rand=123456
        const hashHex = sha512.create().update(`${rand}/contest.standings?apiKey=${process.env.API_KEY}&contestId=${contestId}&time=${currentUnixTime}#${process.env.API_SECRET}`).hex()
        const res: any = await axios.post(`https://codeforces.com/api/contest.standings?contestId=${contestId}&apiKey=${process.env.API_KEY}&time=${currentUnixTime}&apiSig=123456${hashHex}`)
        const data = res.data?.result?.rows;
        const team: any = []
        for (let i = 0; i < 10; i++) {
            let name: string
            data[i].party.teamId?name=data[i].party.teamName:name = data[i].party.members[0].handle
            let obj={"Rank":`${data[i].rank}`,"Name":`${name}`,"Score":`${data[i].points}`}
            team.push(obj)
        }
        return new NextResponse(JSON.stringify(team), { status: 200 })


    } catch (error) {
        console.log(error)
        return new NextResponse("Internal server error", { status: 500 })
    }
}