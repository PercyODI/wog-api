import { v1 as neo4j } from 'neo4j-driver';
import { User } from '../types/user';
import { ResultSummary, Integer } from 'neo4j-driver/types/v1';

const graphenedbURL = process.env.GRAPHENEDB_BOLT_URL;
const graphenedbUser = process.env.GRAPHENEDB_BOLT_USER;
const graphenedbPass = process.env.GRAPHENEDB_BOLT_PASSWORD;

const driver = neo4j.driver(graphenedbURL, neo4j.auth.basic(graphenedbUser, graphenedbPass));
const session = driver.session();

export async function GetAllUsers(): Promise<User[]> {
    return await session
        .run('MATCH (user:User) RETURN user')
        .then(res => {
            return res.records.map(r => {
                var ret = (r.toObject() as any).user.properties;
                return ret as User;
            });
        });
}

export async function AddUser(name: String): Promise<ResultSummary<Integer>> {
    return await session
        .run('CREATE (u:User {name: {nameParam}})', {'nameParam': name})
        .then(res => {
            var sum = res.summary;
            return sum;
        });
}