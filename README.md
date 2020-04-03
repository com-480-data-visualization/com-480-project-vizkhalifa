# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Jonathan Doenz | 195210 |
| Asli Yörüsün   | 298828 |
| Aleksandar Hrusanov | 309750 |

[Milestone 1](#milestone-1-friday-3rd-april-5pm) • [Milestone 2](#milestone-2-friday-1st-may-5pm) • [Milestone 3](#milestone-3-thursday-28th-may-5pm)

## Milestone 1 (Friday 3rd April, 5pm)

### Dataset

We will focus on two datasets for our main visualization - [*Migration
Flow dataset*](https://guyabel.com/publication/global-migration-estimates-by-gender/) 
by Professor Guy Abel from the School of Sociology and
Political Science at Shanghai University and the United Nations'
[*Migration Stock dataset*](https://www.un.org/en/development/desa/population/migration/data/index.asp). 
This will give a global overview of migration
with some possible filtering, e.g. by sex and age. In addition, we will
explore the feasibility of adding a more specific visualization of data
based on a focus country or focus group of migrants (e.g. refugees and
asylum-seekers).

### Problematic

Debates on migration often appear in the news. They usually focus on a
singular event or group of people and try to elicit emotional reactions
from the reader. It is therefore hard to have an objective idea of the
scale of the global phenomenon outside of this particular instance. Our
visualization proposes to offer this insight: you can see what is the migration
flow from any country to any other averaged over 5 years. So the next
time someone claims that there are too many immigrants from this
particular country to that particular one, you have a mean to approve or
disprove the claim. Besides, you can have an overview of what are the
countries that have the highest (and lowest) numbers of immigrants
overall and with respect to their total populations.\
A recent such example is the European refugee crisis. Our attention was
focused on this particular group of people migrating in the European
Union from across the Mediterranean Sea or through Southeast Europe.
While the media often presented this as a local one-off occurrence, the
reality is way more constant and widespread. While this is a more
specific example, it still is a big part of global migration.

### Exploratory Data Analysis

In this exploratory data analysis, we mainly focused on the *Migration
Flow dataset*, which contains the migration flows between any two countries 
aggregated over 5 years intervals from 1960 to 2015, for women and men separately.
The details of the analyses performed can be seen in the file `migration_datasets_EDA.ipynb`.
Here we display a subset of the results obtained.

We focused on the most recent time interval, i.e. 2010-2015 in the present analyses.
We first looked at the countries with the highest overall migrant inflows
without separating women and men.
We observed that the USA is the country with the largest inflow of migrants by far
as can be seen in the figure below.
![top_inflows](assets/figures/2010_b_inflow_15_largest_sum.png "Top 15 countries in number of inflow migrants")

Looking at the largest migrants' *out*flows, we noticed the vast impact of 
the civil war undergoing in Syria since 2011.
![top_outflows](assets/figures/2010_b_outflow_15_largest_sum.png "Top 15 countries in number of outflow migrants")

We then reproduced these analyses but divided the migrant flows by the local population size
to see the largest migrant flows _per-capita_.
We noticed the prevalence of Persian Gulf countries such as Oman, Kuwait, Qatar, UAE, Bahrain 
in the top of the per-capita inflow ranking, 
which is line with their infamously large foreign migrant workers taskforce.
![top_inflows_norm](assets/figures/2010_b_inflow_15_largest_sum_norm.png "Top 15 countries in number of inflow migrants normalized")

We then investigated what were the flows with largest differences between women and men.
In the following figures, you can see the countries with the largest number of 
women migrants compared to men, for the sake of brevity we arbitrarily consider only outflows here.
The right panel shows the per-capita version.
![top_outlows_f_minus_m](assets/figures/2010_f_minus_m_inflow_15_largest_sum.png "Top 15 countries with more women than men outflowing")

Now let's look at the opposite, i.e. the countries with the largest difference between women and men outflows, 
where men are more numerous.
![top_outlows_m_minus_f](assets/figures/2010_m_minus_f_outflow_15_largest_sum.png "Top 15 countries with more men than women outflowing")

### Related work

Professor Guy Abel from the School of Sociology and Political
Science at Shanghai University, has made very significant work on
studying global migration as well as visualizing it. The two
following papers from him are based on the datasets that we will
use.

-   Estimates of Global Bilateral Migration Flows by Gender Between
1960 and 2015, by Guy J. Abel

-   Visualizations by the above mentioned Prof. Guy Abel:

	-   The global flow of people
	([link](http://download.gsb.bund.de/BIB/global_flow/))

	-   Migration stock as chord diagrams
	([link](https://guyabel.com/post/migrant-stock-chord-digrams/))

	-   Internal migration flows in low and middle income countries
	([retweet by Prof. Abel](https://twitter.com/WorldPopProject/status/1075051639076216832?s=20))

-   Researchers from University of Washington and The Nature
Conservancy modeled potential habitat for 2954 species using
climate change projections and the climatic needs of each
species ([Animal
		Migration](http://maps.tnc.org/migrations-in-motion/#4/19.00/-78.00))

## Milestone 2 (Friday 1st May, 5pm)

**10% of the final grade**


## Milestone 3 (Thursday 28th May, 5pm)

**80% of the final grade**

