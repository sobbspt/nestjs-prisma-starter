import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const Public = (): CustomDecorator => SetMetadata('Public', true);
