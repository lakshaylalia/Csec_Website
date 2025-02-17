import axios from 'axios';
import { createHash } from 'crypto';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const currentUnixTime = Math.floor(Date.now() / 1000);
        const rand = 123456;
        const contestId = 518605;
        const groupCode = "Mka6Tznt4j";
        const apiKey = process.env.API_KEY;
        const apiSecret = process.env.API_SECRET;
        const hashString = `${rand}/contest.hacks?apiKey=${apiKey}&contestId=518605&groupCode=${groupCode}&time=${currentUnixTime}#${apiSecret}`;
        const hashHex = createHash('sha512').update(hashString).digest('hex');
        const res: any = await axios.get(`https://mirror.codeforces.com/api/contest.hacks?groupCode=${groupCode}&contestId=${contestId}&apiKey=${apiKey}&time=${currentUnixTime}&apiSig=${rand}${hashHex}`);
        console.log(res);

        const data = res.data?.result?.rows;
        const team: any = [];
        // for (let i = 0; i < 10; i++) {
        //     let name: string;
        //     name = data[i].party.teamId ? data[i].party.teamName : data[i].party.members[0].handle;
        //     let obj = { "Rank": `${data[i].rank}`, "Name": `${name}`, "Score": `${data[i].points}` };
        //     team.push(obj);
        // }
        return new NextResponse(JSON.stringify(data), { status: 200 });

    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
    }
}