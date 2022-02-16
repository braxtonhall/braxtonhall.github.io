import React, {useEffect, useState} from "react";
import {SubPageKind, SubPageProps} from "./SubPage";
import axios from "axios";

const Minecraft = (props: MinecraftProps) => {
    const visible = props.page === SubPageKind.MINECRAFT;
    const [loaded, setLoaded] = useState(false);
    return <React.Fragment>
        {(visible || loaded) ?
            <React.Fragment>
                <MinecraftStatsContainer visible={visible} setLoaded={() => setLoaded(true)}/>
            </React.Fragment> :
            ""}
    </React.Fragment>;
};

const MinecraftStatsContainer = (props: {visible: boolean, setLoaded: () => void}) => {
    const [data, setData] = useState<Statistics | null>(null);
    useEffect(() => {
        props.setLoaded();
        axios.get("https://mc.braxtonhall.ca/statistics/play_one_minute")
            .then((res) => {
                res.data.records.reverse();
                setData(res.data);
            });
    }, [props]);

    const containerClassName = props.visible ? "" : "hidden-scrolling no-touch";
    const visibility = props.visible && data !== null ? "opaque" : "transparent no-touch no-select";
    return <div className={`minecraft-container embedded-scrolling fixed-transition ${visibility} ${containerClassName}`}>
        <MinecraftStats stats={data ?? {name: "", key: "", records: []}}/>
    </div>;
};

const MinecraftStats = (props: {stats: Statistics}) => {

    const className = `minecraft`;
    return <table className={className}>
        <thead>
            <th/>
            <th>
                Player
            </th>
            <th>
                Play Time
            </th>
        </thead>
        <tbody>
            {props.stats.records.map((record, i) =>
                <tr key={record.player.uuid}>
                    <td className="mc-stat">{i + 1}.</td>
                    <MCPlayer player={record.player}/>
                    <td className="mc-stat">
                        {getTime(record.statistic)}
                    </td>
                </tr>)}
        </tbody>
    </table>;
};

const getTime = (ticks: number) => {
    const seconds = ticks / 20;
    const remainderSeconds = Math.floor(seconds % 60);
    const prettySeconds = ("0" + remainderSeconds).slice(-2);
    const minutes = seconds / 60;
    const remainderMinutes = Math.floor(minutes % 60);
    const prettyMinutes = ("0" + remainderMinutes).slice(-2);
    const hours = minutes / 60;

    const flooredHours = Math.floor(hours);

    return `${flooredHours}h ${prettyMinutes}m ${prettySeconds}s`;
}

const MCPlayer = (props: {player: Player}) => {
    const [name, setName] = useState<string | null>(props.player.name || null);
    useEffect(() => {
        if (name === null) {
            const url = `https://api.ashcon.app/mojang/v2/user/${props.player.uuid}`;
            axios.get(url).then((res) => setName(res.data.username));
        }
    }, [name, props.player.uuid]);

    return <td>
        {name ?? "???"}
    </td>
};

interface Statistics {
    name: string;
    key: string;
    records: Record[];
}

interface Record {
    player: Player;
    statistic: number;
}

interface Player {
    uuid: string;
    name: string | null;
}

interface MinecraftProps extends SubPageProps {
}

export {Minecraft};
