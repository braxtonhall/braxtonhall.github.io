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
        axios.get("https://mc.braxtonhall.ca/statistics/deaths")
            .then((res) => {
                res.data.records.reverse();
                setData(res.data);
            });
    }, [props]);

    const containerClassName = props.visible ? "" : "hidden-scrolling no-touch";
    // TODO projects-container should not be projects-container
    return <div className={`projects-container embedded-scrolling ${containerClassName}`}>
        <MinecraftStats visible={props.visible && data !== null} stats={data ?? {name: "", key: "", records: []}}/>
    </div>;
};

const MinecraftStats = (props: {visible: boolean, stats: Statistics}) => {
    const visibility = props.visible ? "opaque" : "transparent no-touch no-select";
    const className = `fixed-transition ${visibility}`;
    return <table className={className}>
        <thead>
            <th>
                Player
            </th>
            <th>
                Deaths
            </th>
        </thead>
        <tbody>
            {props.stats.records.map((record, i) =>
                <tr key={record.player.uuid}>
                    <MCPlayer player={record.player}/>
                    <td>
                        {record.statistic}
                    </td>
                </tr>)}
        </tbody>
    </table>;
};

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
    statistic: string;
}

interface Player {
    uuid: string;
    name: string | null;
}

interface MinecraftProps extends SubPageProps {
}

export {Minecraft};
