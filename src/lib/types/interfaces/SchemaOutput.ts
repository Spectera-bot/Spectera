import type { Snowflake } from '@sapphire/snowflake';

export interface SchemaOutput {
	prefix: string;
	roleId: Snowflake;
}
