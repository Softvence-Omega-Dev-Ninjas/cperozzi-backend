import { ApiProperty } from '@nestjs/swagger';

export class OrganizationResponseDto {
  @ApiProperty({ example: 'a1b2c3-d4e5' })
  id: string;

  @ApiProperty({ example: 'Helping Hands Foundation' })
  organizationName: string;

  @ApiProperty({ example: 'https://www.helpinghands.org' })
  organizationWebsite?: string;

  @ApiProperty({ example: 'To empower underprivileged communities' })
  missionStatement?: string;

  @ApiProperty({ example: 'Empowering communities through education' })
  refinedMissionStatement?: string;

  @ApiProperty({ example: 'Community Development' })
  corePurpose?: string;

  @ApiProperty({ example: 'Education and Health' })
  typeOfWork?: string;

  @ApiProperty({ example: 'Expand outreach nationwide' })
  goalsAspirations?: string;

  @ApiProperty({ example: 'Literacy programs, health camps' })
  programs?: string;

  @ApiProperty({ example: '10,000 beneficiaries reached' })
  achievements?: string;

  @ApiProperty({ example: '$500,000 annually' })
  budget?: string;

  @ApiProperty({ example: '80% success rate' })
  evaluation?: string;

  @ApiProperty({ example: 12 })
  noOfGrants?: number;

  @ApiProperty({ example: 'https://drive.google.com/file/xyz' })
  sharedLink?: string;

  @ApiProperty({ example: true })
  isGrant: boolean;

  @ApiProperty({ example: '2025-01-01T10:00:00.000Z' })
  createdAt: Date;
}
